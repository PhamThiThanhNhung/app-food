import { useRef, useState } from 'react';
import { db } from '../../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import { addDoc, getDocs, collection } from 'firebase/firestore/lite';

const Demo = () => {
  const nameProductRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);
  const dealRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLSelectElement | null>(null);
  const ref = collection(db, 'products');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      name: nameProductRef.current?.value,
      description: descriptionRef.current?.value,
      price: priceRef.current?.value,
      deal: dealRef.current?.value,
      countLike: 0,
      star: {
        countFiveStar: 0,
        countFourStar: 0,
        countThreeStar: 0,
        countTwoStar: 0,
        countOneStar: 0,
      },
      Acount: 10,
      image: imageRef.current?.value,
      category: categoryRef.current?.value,
    };
    try {
      await addDoc(ref, data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Category:</label>
        <select ref={categoryRef} className="border-2 ">
          <option defaultChecked>Choose category</option>
          <option value={1}>Burger</option>
          <option value={2}>Pizza</option>
        </select>
        <label>Name product:</label>
        <input
          type={'text'}
          name="name"
          ref={nameProductRef}
          className="border-2"
        />
        <label>Description:</label>
        <input
          type={'text'}
          name="description"
          className="border-2"
          ref={descriptionRef}
        />
        <label>Price:</label>
        <input
          type={'number'}
          name="Price"
          className="border-2"
          ref={priceRef}
        />
        <label>Deal:</label>
        <input type={'number'} name="Deal" className="border-2" ref={dealRef} />
        <label>Image:</label>
        <input type={'text'} name="Price" className="border-2" ref={imageRef} />
        <button type="submit">save</button>
      </form>
    </>
  );
};

export default Demo;
