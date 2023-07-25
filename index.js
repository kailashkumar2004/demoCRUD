const mongoose = require("mongoose");
const express = require("express");
const { loveData } = require("./src/db/model/model");
const database = require("./src/db/db");
const { HelloData } = require("./src/db/model/markshit");
const Data = database.database;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("i love you mummy")
})
app.post("/add", async (req, res) => {
    try {
        const newdata = new loveData({
            name: req.body.name,
            class: req.body.class,
            roll: req.body.roll,
            roomNo: req.body.roomNo,
            date: req.body.date,
            day: req.body.day,
            month: req.body.month,
            year:req.body.year


        });
        const result = await newdata.save();
        console.log("result===============", result);
        if (!result) {
            throw "data not saved in the db";
        }
        res.status(200).json({
            msg: "successfully",
            result: result
        });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({
            msg: "error saving data",
            error: error.message
        });
    }
});
app.delete("/deleteData/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const deletedData = await loveData.findByIdAndDelete(id);
      if (!deletedData) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json({
        msg: "Data deleted successfully",
        data: deletedData
      });
    } catch (error) {
      console.error("Error deleting data:", error);
      res.status(500).json({ message: "Error deleting data" });
    }
  });
app.get("/getData", async (req, res) => {
    try {
        const response = await loveData.find()
        if (!response) throw 'not found data'
        res.status(200).json({
            msg: "success",
            count: response.length,
            result: response
        });
    } catch (error) {
        res.status(508).json({
            error: "error data for api"
        })

    }
});
app.put("/updateData/:id", async (req, res) => {
    try {
      const id = req.params.id;
        const newData = {
            name: req.body.name,
            class: req.body.class,
            roll: req.body.roll,
            roomNo: req.body.roomNo,
            date: req.body.date,
            day: req.body.day,
            month: req.body.month,
            year:req.body.year
      
      };
      const updateData = await loveData.findByIdAndUpdate(id, newData, { new: true });
      if (!updateData) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.status(200).json({
        msg: "Data updated successfully",
        data: updateData
      });
    } catch (error) {
      console.error("Error updating data:", error);
      res.status(500).json({ message: "Error updating data" });
    }
});
app.delete("/deleteData/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedData = await loveData.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json({
      msg: "Data deleted successfully",
      data: deletedData
    });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ message: "Error deleting data" });
  }
});
app.put('/updateById/:id', async (req, res) => {
    const dataId = req.params.id;
    const updatedData = {
      name: req.body.name,
      class: req.body.class,
      roll: req.body.roll,
      roomNo: req.body.roomNo,
      date: req.body.date,
      day: req.body.day,
      month: req.body.month,
      year: req.body.year
    };
  
    try {
      const result = await loveData.findByIdAndUpdate(dataId, updatedData, { new: true });
  
      if (!result) {
        return res.status(404).json({ error: 'Data not found' });
      }
  
      res.status(200).json({
        msg: 'Data updated successfully',
        result: result
      });
    } catch (error) {
      console.error('Error updating data:', error);
      res.status(500).json({
        msg: 'Error updating data',
        error: error.message
      });
    }
});
  
app.post("/addmarkshit", async (req, res) => {
    try {
        const newdata = new HelloData({
            studentId: req.body.studentId,
            fathersName: req.body.fathersName,
            mothersName: req.body.mothersName,
            schoolName: req.body.schoolName,
            class: req.body.class,
            roolNumber: req.body.roolNumber,
            roolCode: req.body.roolCode,
            BoradName: req.body.BoradName,
            
        });
        const result = await newdata.save();
        console.log("result===============", result);
        if (!result) {
            throw "data not saved in the db";
        }
        res.status(200).json({
            msg: "successfully",
            result: result
        });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({
            msg: "error saving data",
            error: error.message
        });
    }
});
app.get("/getAllmarkshit", async (req, res) => {
    try {
        const response = await HelloData.find().populate("studentId")
        if (!response) throw 'not found data'
        res.status(200).json({
            msg: "success",
            count: response.length,
            result: response
        });
    } catch (error) {
        res.status(508).json({
            error: "error data for api"
        })

    }
});
app.listen(4000, () => {
    console.log("your savin data port 7000")
})
