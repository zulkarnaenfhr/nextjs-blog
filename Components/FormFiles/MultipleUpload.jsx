import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function MultipleUpload() {
    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState([]);

    useEffect(async () => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        await setImageURLs(newImageUrls);
        console.log(imageURLS);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    return (
        <>
            <input type="file" multiple accept="image/*" onChange={onImageChange} />
            {imageURLS.map((imageSrc) => (
                <img src={imageSrc} alt="not fount" width={"250px"} />
            ))}
            <br />
            <button
                onClick={() => {
                    console.log(imageURLS);
                }}
            >
                cek state
            </button>

            <Link href={"/"}>
                <button>amama</button>
            </Link>
        </>
    );
}
