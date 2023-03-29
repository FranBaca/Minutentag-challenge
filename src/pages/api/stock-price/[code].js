import stockPrice from "./stock-price";
import products from "../../../../assets/products";
export default function handler(req, res) {
    const { code,brand } = req.query;
    
    if (typeof code !== "string" ) {
      res.status(400).json({ message: "Invalid code" });
      return;
    }
  
    const response = stockPrice[code];
    
    if (!response) {
      res.status(404).json({ message: "Stock price not found" });
      return;
    }
  
    res.status(200).json(response);

  }


