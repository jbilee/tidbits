export function getDownloadableData(data: any) {
  return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
}

export function getLoadedData(cb: (data: string) => void) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const result = reader.result;
    if (!result) throw new Error("Could not load file.");
    cb(result as string);
  });

  const inputElem = document.getElementById("uploader") as HTMLInputElement;
  const files = inputElem.files;

  if (files) {
    return reader.readAsText(files[0]);
  }
}
