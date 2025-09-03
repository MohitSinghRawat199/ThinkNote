import Note from "../Modal/Note.js"
export async function getAllNotes(_, res) {
    try {
        const Data = await Note.find().sort({createdAt:-1});
        res.status(200).send(Data);
    } catch (err) {
        res.status(500).send("Internal server Error" + err);
    }
}

export async function createNote(req, res) {
    try {
        const {title,content } = req.body;
        console.log(title);
        if (!title || !content) {
            return res.status(400).json({ message: "Title and content are required" });
        }
        const newNote = new Note({ title,content});
        const savedNote =await newNote.save();
        res.status(200).json({message:"you notes added successfully",
            savedNote:savedNote
        });
    } catch (err) {
        res.status(500).send("Internal server Error")
    }

}



export async function getNote(req, res) {
    try {
        const {id} = req.params;
        const savedNote = await Note.findById(id);
        res.status(200).json({message:"Data",
            savedNote:savedNote
        });
    } catch (err) {
        res.status(500).send("Internal server Error")
    }
}


export async function updateNote(req, res) {
    try{
        const {title,content}=req.body;
        if(!title || !content){
            return res.status(404).json({message:"title and content required"})
        }
        const {id} = req.params;
        const Updatednote = await Note.findByIdAndUpdate(id,{title,content},{new:true});
        res.status(200).json({message:"Note Updated Successfully",
            updateNote:Updatednote
        });
    }catch(err){
        res.status(501).send("Internal Server Error");
    }
}

export async function deleteNote(req, res) {
    try{
        const {id} = req.params;
        const DeletedNode = await Note.findByIdAndDelete(id);
        res.status(200).json({message:"Note Deleted",
            DeletedNode:DeletedNode
        });
    }catch(err){
        res.status(501).send("Internal Server Error");
    }
}