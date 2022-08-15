import React from "react"
// import Data from "./memedata"

const Main = ()=>{
    const [link,setNewLink] = React.useState({
        uppertxt : "",
        lowertxt : "",
        url : "https://i.imgflip.com/1g8my4.jpg"
    })
    
    const handleChange = (event)=>{
        const {name,value} = event.target
        setNewLink((pre)=>{
            return {
                ...pre,
                [name] : value
            }
        })
    }

    const meme = (event)=>{
        event.preventDefault();
        // const randmemsarr = Data.data.memes
        // const randnumer = Math.floor(Math.random() * randmemsarr.length)
        // const url = randmemsarr[randnumer].url
        // setNewLink({
        //     uppertxt : "",
        //     lowertxt : "",
        //     link : url
        // })
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                const x = data.data.memes
                const x2 = Math.floor(Math.random() * x.length)
                const xurl = x[x2].url
                setNewLink(()=>{
                    return {
                        uppertxt : "",
                        lowertxt : "",
                        url: xurl
                    }
                })
            })
        console.log(link.url)
    }
    const Haha = <><img className="meme-img" src={link.url} alt=""/><h2 className="uppertxt">{link.uppertxt}</h2><h2 className="lowertxt">{link.lowertxt}</h2></>

 
    return( 
    <main>
    <form>
        <div className="main-content">
            <input value={link.uppertxt} name="uppertxt" onChange={handleChange} className="input-1" type="text" />
            <input value={link.lowertxt} name= "lowertxt" onChange={handleChange}className="input-2" type="text" />
        </div>
        <button onClick={meme} className="submit">Get a new meme image</button>
        <div className="container">{Haha}</div>
    </form>
    </main>
    )
}

export default Main 