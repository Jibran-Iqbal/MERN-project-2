const { findByIdAndUpdate } = require("../model/book");
const Book = require("../model/book")

const getBooks =async(req,res,next)=>{
    let books;
    try{
        books=await Book.find();
    }
    catch(err)
    {
        console.log(err)
    }
    if(!books)
        return res.status(404).json({message:"No products found"})
    
    return res.status(200).json({books})
}

const getById = async(req,res,next)=>{
    const id=req.params.id;
    let book;
    try{
        book = await Book.findById(id)
    }
    catch(err)
    {
        console.log(err)
    }
    if(!book)
        return res.status(404).json({message:"No book found"})
    
    return res.status(200).json({book})
}

const addBook = async(req,res,next)=>{
    const {name, author, description, price, available, image}=req.body;
    let book;
    try {
        book=new Book({
            name,
            author:author,
            description,
            price,
            available,
            image
    })
        await book.save()
        res.status(200)
    } catch (error) {
        console.log(error)
    }
    if(!book){
        return res.status(500).json({message:"Unable to Add"})
    }
    return res.status(201).json({book})
}

const updateBook = async(req,res,next)=>{
    const id = req.params.id;
    const newBook = {name, author, description, price, available, image} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, newBook)
        book = await book.save()
    } catch (error) {
        console.log(error)
    }
    if(!book)
        return res.status(404).json({message:"Unable to update by this ID"})
    
    return res.status(200).json({book})
}

const deleteBook = async(req,res,next) =>{
    const id=req.params.id;
    let book;
    try {
        book =await Book.findByIdAndRemove(id);
    } catch (error) {
        console.log(error);
    }
    if(!book)
    return res.status(404).json({message:"No book found with this id"})
    
    return res.status(200).json({message:"Product successfully deleted"})
}

exports.getBooks = getBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook
exports.deleteBook = deleteBook

// https://youtu.be/5Y5QKfxTErU?t=2285