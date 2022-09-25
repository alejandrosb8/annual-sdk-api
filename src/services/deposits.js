const soap = require('soap');
const url = 'http://64.135.103.209:49152/SaintAdminServer?wsdl';

const getDeposits = async (req, res) => {
  try {
    const { token } = req.body;
    const client = await soap.createClientAsync(url);
    const data = await client.Adm_ListarDepositosAsync({ parametro: {}, token });
    res.json(JSON.parse(data[0].Adm_ListarDepositosResult));
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const addDeposit = async (req, res) => {
  try {
    const { deposito, token } = req.body;
    const client = await soap.createClientAsync(url);
    const data = await client.Adm_CrearDepositoAsync({ deposito, token });
    res.json(JSON.parse(data[0].Adm_CrearDepositoResult));
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const deleteDeposit = async (req, res) => {
  try {
    const { codigoDeposito, token } = req.body;
    const client = await soap.createClientAsync(url);
    const data = await client.Adm_BorrarDepositoAsync({ codigoDeposito, token });
    res.json(JSON.parse(data[0].Adm_BorrarDepositoResult));
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
};

const updateDeposit = async (req, res) => {
  try {
    const { deposito, token } = req.body;
    const client = await soap.createClientAsync(url);
    const data = await client.Adm_EditarDepositoAsync({ deposito, token });
    res.json(JSON.parse(data[0].Adm_EditarDepositoResult));
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export { getDeposits, addDeposit, deleteDeposit, updateDeposit };
