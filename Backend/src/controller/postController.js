import {postModel} from '../models/postModel.js';

const createPost=async(req, res)=>{

	try{
		const {name, description, age}=req.body;
		if(!name || !description || !age){
			return res.status(400).json({message:"all fields are required"});
		}
		const post=await postModel.create({name, description, age});
		res.status(201).json({message:"post created successfully",post});
	}
	catch(err){
		console.log("ERROR Occured:", err);
  res.status(500).json({ message: err.message });
	}
}

const getPosts=async(req, res)=>{
		try{
	const recievedPosts=await postModel.find();
	res.status(200).json(recievedPosts);
	}
	catch(err){
	console.log("ERROR Occured:", err);
  res.status(500).json({ message: err.message });	
	}
}

const updatePost=async(req, res)=>{
	try{
		if(Object.keys(req.body).length===0){
			return res.status(400).json({message:"nothing to update"});
		}
		const post=await postModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
		if(!post) return res.status(400).json({message:"post not found"});
		res.status(200).json({message:"post updated successfully", post});
	}
	catch(err){
	console.log("ERROR Occured:", err);
  res.status(500).json({ message: err.message });	
	}
}

const deletePost=async(req, res)=>{
	try{
		const post=await postModel.findByIdAndDelete(req.params.id);
		if(!post) return res.status(404).json({message:"post not found"});
		res.status(200).json({message:"post deleted successfully"});
	}
	catch(err){
		console.log("ERROR Occured:", err);
  		res.status(500).json({ message: err.message });
	}
}

export {createPost, getPosts, updatePost, deletePost}










