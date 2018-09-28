function isEmpty(obj) {
  for (var K in obj)  {
    return false;
  }
  return true;
}
var info = {};
alert( isEmpty(info));
info['boo'] = 'gagagagaag';
alert( isEmpty(info));
