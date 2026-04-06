import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            minlength:3,
            maxlength:12
        },
        password:{
            type:String,
            required:true,
            minlength:5,
            maxlength:8
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true           
        }

    },
    {
        timestamps:true
    }
)
    //hash passwords
    userSchema.pre("save", async function (){
        if(!this.isModified("password")) return;
        this.password=await bcrypt.hash(this.password, 10);
    });
    //compare passwords
    userSchema.methods.comparePassword=async function (password){
        return await bcrypt.compare(password, this.password)
    }


export const UserModel=mongoose.model("user", userSchema);







