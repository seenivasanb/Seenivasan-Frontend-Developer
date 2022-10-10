const express = require("express");
const router = express.Router();
const https = require("https");

const onGetCapsules = async (req, res, next) => {
  try {
    const query = Object.entries(req?.body).reduce((prevItem, currentItem) => {
      if (currentItem[1].length > 0)
        return (prevItem += `&${currentItem[0]}=${currentItem[1]}`);
      return prevItem;
    }, "");

    console.log(query);
    // const spacedValue = value.toLowerCase().replace(/%20/g, ' ');
    // const filteredProducts = data.filter(product => product.name.toLowerCase().indexOf(spacedValue) > -1);

    https
      .get(
        `https://api.spacexdata.com/v3/capsules/?id=true${query}`,
        (response) => {
          let data = [];

          response.on("data", (chunk) => {
            data.push(chunk);
          });

          response.on("end", () => {
            console.log("Response ended: ");
            const capsules = JSON.parse(Buffer.concat(data).toString());
            if (capsules) res.json(capsules);
            else res.json({ error: "true", payload: "Data not found" });
          });
        }
      )
      .on("error", (err) => {
        console.log("Error: ", err.message);
      });
  } catch (e) {
    next(e);
  }
};
router.route("/api/v1/capsules/").post(onGetCapsules);
module.exports = router;
