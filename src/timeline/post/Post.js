import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Bookmark, Telegram } from '@mui/icons-material';

function Post({user,postImage,likes,timepamp}) {
  return (
    <div className='post'>
    <div className='post__header'>
        <div className='post__headerAuthor'>
        <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
       {user} . {" "} <span> {timepamp} </span>
        </div>
        <MoreHorizIcon/>
    </div>
    <div className='post__image'>
        <img src={postImage}alt=''/>
    </div>
    <div className='post__footer'>
        <div className='post__footerIcon'>
         <div className='post__iconMain'>
            <FavoriteIcon className='postIcon'/>
            <ChatBubbleOutlineIcon className='postIcon'/>
            <Telegram className='postIcon'/>
         </div>
         <div className='posr__iconSave'>
            <Bookmark className='postIcon'/>
         </div>
        </div>
       Likeby {likes} peoples
    </div>
    </div>
  )
}

export default Post