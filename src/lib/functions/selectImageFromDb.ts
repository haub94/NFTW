import type { ImageData } from "../../../prisma/tableInterfaces";

export function selectImageFromDb(wantedImageName: string, imagesFromDb: ImageData[]) {
    for (let index = 0; index < imagesFromDb.length; index++) {
        if (imagesFromDb[index].name === wantedImageName) {
            return [imagesFromDb[index].path , imagesFromDb[index].altText];
        }
    }
}