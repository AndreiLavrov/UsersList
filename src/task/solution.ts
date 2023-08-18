const getValueByPath = <T,>(
  obj: object,
  path: string,
  defaultValue?: T,
): object | undefined | T => {
  const pathItems: string[] = path.split('.');
  let value = obj;

  for (let i = 0; i < pathItems.length; i++) {
    if (!value?.[pathItems[i]]) return defaultValue;
    value = value[pathItems[i]];
  }

  return value;
};

const obj = {
  a: {
    b: {
      c: 'd',
    },
    e: 'f',
  },
};

getValueByPath(obj, 'a.b'); // { c : 'd' }
getValueByPath(obj, 'a.b.c'); // 'd'
getValueByPath(obj, 'a.e'); // 'f'
getValueByPath(obj, 'x.x.e'); // undefined
getValueByPath(obj, 'a.x.e', true); // true
getValueByPath(obj, 'a.x.e', 'My default value'); // My default value
