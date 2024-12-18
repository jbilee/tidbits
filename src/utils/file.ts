import type { UserData } from "@/shared.svelte";

export function getDownloadableData(data: UserData) {
  return "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
}
