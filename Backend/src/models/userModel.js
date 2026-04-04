import mongoose, {Schema} from 'mongoose';

const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            minlength:3,
            maxlength:8
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

export const UserModel=mongoose.model("user", userSchema);