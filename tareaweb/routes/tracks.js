const express = require ("express");
const router = express.Router();
const customHeader= require("../middleware/customHeader")
const {validatorCreateitem,validatorGetItem} = require ("../validators/tracks")
const {getItems,getItem, createItem,updateItem,deleteItem} = require ("../controllers/tracks")
/**
 * lista items
 */
router.get("/",getItems);
/**
 * obtener items
 */
 router.get("/:id",validatorGetItem,getItems);
 /**
  * crear un registro
  */

router.post("/", validatorCreateitem,createItem);
/**
 * actualizar registro
 */
 router.put("/:id", validatorGetItem,validatorCreateitem,updateItem);

 router.put("/:id", validatorGetItem,deleteItem);

module.exports = router;