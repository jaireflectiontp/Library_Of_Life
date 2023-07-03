import React, { useContext, useState } from 'react';
import UserContext from "../../../Context/UserContext";
import VideoContext from "../../../Context/VideoContext";
import "../../../SCSS/HeaderCSS/_right_header.scss";
import Nav from '../../Navigation/Nav';
import Button from "../../Button/Button"
const Right_header = () => {

  const [openMenu, setMenu] = useState(false)
  const [dialogBox, setDialogBox] = useState(false)
  const uploadSection = (value) => {
    setDialogBox(value)
  }

  const { setEachvideoContent } = useContext(VideoContext)
  const [videoTitle, setVideoTitle] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [vdoDataError, setvdoDataError] = useState('')
  const { currentLogged } = useContext(UserContext)
  const [videoFrom, setVideoFrom] = useState('External')

  const changeTab = (format) => {
    setVideoFrom(format)
  }
  const uploadVid = () => {
    if (videoTitle === '' || videoUrl === '') {
      setvdoDataError('Enter video details')
    }

    else {
      setvdoDataError('')
      const video =
      {
        username: currentLogged.username,
        title: videoTitle,
        url: videoUrl
      }

      const videoList = localStorage.getItem('videos') ? JSON.parse(localStorage.getItem('videos')) : [];
      videoList.push(video)
      localStorage.setItem('videos', JSON.stringify(videoList))
      setDialogBox(false)
      setEachvideoContent(videoList)
    }
  }
  const [videoPath, setVideoPath] = useState()
  const setLocalVideo = (e) => {
    if (e.target.files[0]?.type === 'video/mp4') {
      setVideoPath(e.target.files[0])
    }
    else {
      setVideoPath('')
    }
  }

  return (
    <div>
      <div className="right_header">
        <div className='upload_btn' onClick={() => uploadSection(true)}><Button variation="upload" label="UPLOAD VIDEO" /></div>
        {dialogBox &&
          <>
            <div className="uploadOverlay" onClick={() => uploadSection(false)}></div>
            <div className="uploadContainer">
              <div className='uploadFieldError'>{vdoDataError}</div>
              <h2>Upload Video</h2>
              <hr />
              <ul>
                <li onClick={() => changeTab('External')} className={`${videoFrom === 'External' ? 'activate' : ''}`}>External</li>
                <li onClick={() => changeTab('Internal')} className={`${videoFrom === 'Internal' ? 'activate' : ''}`}>Internal</li>
              </ul>
              <div className="uploadContainer-Inner">
                <div className="vidInput">
                  <input type="text" value={videoTitle} onChange={(event) => setVideoTitle(event.target.value)} placeholder='Enter Video title' />
                </div>
                <div className="vidInput">
                  {videoFrom === 'External' &&
                    <input type="text" value={videoUrl} onChange={(event) => setVideoUrl(event.target.value)} placeholder='Enter Video url' />
                  }
                  {videoFrom === 'Internal' &&
                    <span className='uploadBox'>Click here to Upload<span className='uploadInpt'><input type="file" onChange={(e) => setLocalVideo(e)} /></span></span>
                  }
                </div>
                <div className="UploadBtn">
                  <button onClick={uploadVid}>Upload</button>
                </div>
              </div>
              <div>
                {videoPath &&
                  <video controls>
                    <source src={videoPath.name} type='video/mp4' />
                  </video>
                }
              </div>
            </div>
          </>
        }

        <div>
          <button className='menu_btn' onClick={() => setMenu(true)}><i class="fa-solid fa-bars"></i></button>
        </div>
        {openMenu &&
          <div className="navigation"><Nav setMenu={setMenu} /></div>
        }
      </div>
    </div>
  )
}

export default Right_header
