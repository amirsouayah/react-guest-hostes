const express=require("express");
const {MongoClient, ObjectID}=require("mongodb");
const bodyParser=require("body-parser");
const assert=require("assert");

const app=express();
app.use(bodyParser.json());

const mongo_url="mongodb://localhost:27017";
const database="guest-hostes";

MongoClient.connect(mongo_url,{ useNewUrlParser: true },(err,client)=>{
assert.equal(err,null,"data base connexion failed");

const db=client.db(database)

        app.get('/city',(req,res)=>{
        db.collection("city").find().toArray((err,data)=>{
        if (err)
            console.log("can't fetch data");
        else res.send(data);
        })
        })



       /* app.get('/city/:name',(req,res)=>{
            let cityName=req.params.id;
            db.collection("host").findOne({_id:ContactId},(err,data)=>{
                if (err) console.log("can't fetch Contact");
                else res.send(data)
            });
        })*/



        app.get('/city/:name',(req,res)=>{
            let cityName=req.params.name
            console.log(cityName)

            db.collection("host").find({ville:cityName}).toArray((err,data)=>{
            if (err)
                console.log("can't fetch data");
            else res.send(data);
            })
            })



        app.get('/host',(req,res)=>{
            db.collection("host").find().toArray((err,data)=>{
            if (err)
                console.log("can't fetch data");
            else res.send(data);
            })
            })


        app.post("/city",(req,res)=>{
            let newCity=req.body
            db.collection("city").insertOne(newCity,(err,data)=>{
                if (err)
                    res.send("Can't add city")
                else res.send("City added successfully")
            })
        })







        app.post("/host",(req,res)=>{
            let newHost=req.body
            db.collection("host").insertOne(newHost,(err,data)=>{
                if (err)
                    res.send("Can't add Host")
                else res.send("Host added successfully")
            })
        })










        app.put("/modify-contact/:id",(req,res)=>{
            let id=ObjectID(req.params.id)
            let updatedContact=req.body
            db.collection("contactList").findOneAndUpdate({_id:id},{$set:{...updatedContact}},(err,data)=>{
                if (err)
                    res.send("can't update movie")
                else res.send(data)
            })
        })


    app.get('/contact-list/:id',(req,res)=>{
        let ContactId=ObjectID(req.params.id);
        db.collection("contactList").findOne({_id:ContactId},(err,data)=>{
            if (err) console.log("can't fetch Contact");
            else res.send(data)
        });
    })

    app.delete('/contact-list/:id',(req,res)=>{
        const id=ObjectID(req.params.id);


        db.collection("contactList").findOneAndDelete({_id:id},(err,data)=>{
            if (err)
                res.send("Can't delete contact");
            else {
                res.send("Contact successfully deleted")

            }

        })


    })



});


app.listen(3007,err=>{
if (err)
    console.log(err)
    else
        console.log('Your server is running on port 3007')
});
