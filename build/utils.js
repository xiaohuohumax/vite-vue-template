import path from "path";

export function getRootPath(...addPath) {
  return path.resolve(process.cwd(), ...addPath).replace("\\", "/");
}
