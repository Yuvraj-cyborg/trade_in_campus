import express from "express";

import {
    addListing,
    allListings,
    getListingById,
    updateListing,
    updateListingImage,
    deleteListing,
} from "./../controllers/listing.js";

import logger from "../middleware/logger.js";
import upload from "../middleware/fileUpload.js";

let router = express.Router();

router.post("/", logger, upload.single("image"), addListing);
router.get("/", logger, allListings);
router.get("/:id", logger, getListingById);
router.put("/:id", logger, updateListing);
router.put("/:id/image", logger, upload.single("image"), updateListingImage);
router.delete("/:id", logger, deleteListing);

export default router;
