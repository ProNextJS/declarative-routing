import { getConfig } from "../config";
import {
  updateBuildFiles,
  parseInfoFile,
  checkRouteFile,
  removeFileFromCache
} from "./build-tools";

const fileMap: Record<string, boolean> = {};
let realTime = false;
let allFilesProcessed = false;

const allCompleted = () => {
  return Object.values(fileMap).every((v) => v);
};

const checkForFinishedProcessing = async () => {
  if (allCompleted()) {
    if (allFilesProcessed) {
      realTime = true;
      await updateBuildFiles();
    }
  } else {
    console.log(
      `Waiting for: ${Object.keys(fileMap).filter((k) => !fileMap[k])}`
    );
  }
};

const isInfoFile = (path: string) => {
  const config = getConfig();
  let matcher: RegExp;
  switch (config.mode) {
    case "qwikcity":
      matcher = /routeInfo\.ts$/;
      break;
    default:
      matcher = /\.info\.ts(x?)$/;
      break;
  }

  return path.match(matcher);
};
const isRouteFile = (path: string) => {
  const config = getConfig();
  let matcher: RegExp;
  switch (config.mode) {
    case "qwikcity":
      matcher = /index\.(js|jsx|ts|tsx)$/;
      break;

    default:
      matcher = /(page|route)\.(js|jsx|ts|tsx)$/;
      break;
  }
  return path.match(matcher);
};

export const processFile = (path: string) => {
  if (realTime) {
    if (isInfoFile(path)) {
      parseInfoFile(path).then(async () => await updateBuildFiles());
    } else if (isRouteFile(path)) {
      checkRouteFile(path).then(async () => await updateBuildFiles());
    }
  } else {
    if (isInfoFile(path)) {
      fileMap[path] = false;
      parseInfoFile(path).then(() => {
        fileMap[path] = true;
        checkForFinishedProcessing();
      });
    } else if (isRouteFile(path)) {
      fileMap[path] = false;
      checkRouteFile(path).then(() => {
        fileMap[path] = true;
        checkForFinishedProcessing();
      });
    }
  }
};

export const finishedProcessing = () => {
  allFilesProcessed = true;
  checkForFinishedProcessing();
};

export function fileRemoved(fpath: string) {
  removeFileFromCache(fpath);
  updateBuildFiles();
}
