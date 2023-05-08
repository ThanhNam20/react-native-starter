import http from "utils/http";

export const getExtensionConfig = () =>
  http.get<any>('/api/extension-config');