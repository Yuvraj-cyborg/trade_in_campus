import mongoose from "mongoose";
import List from "../models/listing.js";

async function addListing(req, res) {
    try {
        let newListing = req.body;
        if (req.file) {
            newListing.imageName = req.file.filename;
        }
        newListing = await List.create(newListing);
        res.status(201).send(newListing);
    } catch (error) {
        console.log(error);
        res
            .status(400)
            .send({ message: "Listing not added", error: error.message });
    }
}

async function allListings(req, res) {
    try {
        let listings = await List.find();
        res.send(listings);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error", error: error.message });
    }
}

async function getListingById(req, res) {
    try {
        let { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid ID" });
        }

        let listing = await List.findOne({ _id: id }).populate("owner");
        if (listing) {
            res.send(listing);
        } else {
            res.status(404).send({ message: "Listing not found" });
        }
    } catch (error) {
        console.log(error);
        res
            .status(400)
            .send({ message: "Listing not found", error: error.message });
    }
}

async function updateListing(req, res) {
    try {
        let { id } = req.params;
        let updatedListing = req.body;

        updatedListing = await List.findOneAndUpdate({ _id: id }, updatedListing, {
            returnDocument: "after",
        });
        if (updatedListing !== null) {
            res.send(updatedListing);
        } else {
            res.status(404).send({ message: "Listing not found" });
        }
    } catch (error) {
        console.log(error);
        res
            .status(400)
            .send({ message: "Listing not updated", error: error.message });
    }
}

async function updateListingImage(req, res) {
    try {
        let { id } = req.params;

        if (!req.file) {
            return res.status(400).send({ message: "No image uploaded" });
        }

        let updatedListing = await List.findOneAndUpdate(
            { _id: id },
            { imageName: req.file.filename },
            { returnDocument: "after" },
        );
        if (updatedListing !== null) {
            res.send(updatedListing);
        } else {
            res.status(404).send({ message: "Listing not found" });
        }
    } catch (error) {
        console.log(error);
        res
            .status(400)
            .send({ message: "Image not updated", error: error.message });
    }
}

async function deleteListing(req, res) {
    try {
        let { id } = req.params;

        let listing = await List.findOneAndDelete({ _id: id });
        if (listing !== null) {
            res.send({ message: "Listing Deleted" });
        } else {
            res.status(404).send({ message: "Listing not found" });
        }
    } catch (error) {
        console.log(error);
        res
            .status(400)
            .send({ message: "Listing not deleted", error: error.message });
    }
}

export {
    addListing,
    allListings,
    getListingById,
    updateListing,
    updateListingImage,
    deleteListing,
};
