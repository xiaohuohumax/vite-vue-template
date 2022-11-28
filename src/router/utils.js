export function routerByName(name) {
  return { name };
}

export const metaTemplate = {
  title: "",
  sort: 0,
};

export function initMeta(meta = metaTemplate) {
  return { ...metaTemplate, ...meta };
}
