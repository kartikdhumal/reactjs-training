/**
 * 
 * @param {num} - number of items you want to generate 
 * @returns n number of items with id , name and with image
 */

const generateItems = (num) => {
    return Array.from({ length: num }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
        imageUrl: `https://picsum.photos/200/300?success=${i + 1}`
    }));
};

export default generateItems;
