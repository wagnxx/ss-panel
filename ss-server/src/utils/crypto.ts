const crypto = require('crypto');
const SECRET_KEY = 'YUGUDS_87831#';

function md5(content) {
  let md5 = crypto.createHash('md5');
  return md5.update(content).digest('hex');
}

function genPssword(password) {
  const str = `password=${password}&key=${SECRET_KEY}`;
  return md5(str);
}

export { genPssword };
