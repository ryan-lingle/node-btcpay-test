require('dotenv').config();
const { crypto, BTCPayClient } = require('btcpay')

const keypair = crypto.load_keypair(
  new Buffer.from(process.env.PRIVATE_KEY, 'hex')
)

const client = new BTCPayClient(
  process.env.BTCPAY_URL,
  keypair,
  { merchant: process.env.MERCHANT }
);


(async function() {
  try {
    const res = await client.get_rates(
      ['BTC_USD'],
      '8MxxGsiMDzBAXAUkbtPLa8ug1v1gxayuSMNDTyJhkBkB',
    );
    console.log(res);
   } catch (err) {
     console.log(err);
   }
})()


// pairing process

// (async function() {
//   try {
//     const res = await client.pair_client(process.env.PAIRING_CODE);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// })();
