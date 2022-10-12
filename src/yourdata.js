// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

// images 
import kellyPic from "./images/kelly-doleo.jpg"
import remedy from "./images/Remedy.png"
import bobaStory from "./images/boba-story.png"
import stopMotion from "./images/stop-motion.png"
import miniGame from "./images/mini-game.png"
import xfinity from "./images/xfinity-app.png"
import mlModel from "./images/ml-model-video.png"
import triviaNight from "./images/Trivia_Night.png"
import particleSystem from "./images/particleSystem.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Kelly D'oleo",
  headerTagline: [
    //Line 1 For Header
    "A full-stack software engineer",
    //Line 2 For Header
    "",
    //Line 3 For Header
    "",
  ],
  //   Header Paragraph
  headerParagraph:
    "currently at Comcast NBCUniversal",

  //Contact Email
  contactEmail: "kellydeoleo@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Xfinity App", //Project Title - Add Your Project Title Here
      para:
        "I collaborate daily with product managers and UX designers to develop native customer facing features within the Xfinity iOS application using UIKit and SwiftUI frameworks", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        xfinity,
      //Project URL - Add Your Project Url Here
      url: "https://www.xfinity.com/apps",
    },
    {
      title: "Boba Story", //Project Title - Add Your Project Title Here
      para:
      "A bubble tea mobile game under Honey B Games. I currently assist with updating the mobile game in Unity and C#", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      bobaStory,
      //Project URL - Add Your Project Url Here
      url: "https://www.bubbleteagame.com/boba-story",
    },
    {
      title: "Mini Game", //Project Title - Add Your Project Title Here
      para:
      "Using Unity and C#, I built a game that resembles a micro game in the mobile game Among Us.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      miniGame,
      //Project URL - Add Your Project Url Here
      url: "https://play.unity.com/mg/other/microgame-294",
    },
    {
      title: "Computer Vision", //Project Title - Add Your Project Title Here
      para:
      "As a student in Media Theory at NYU's MicroMasters Integrated Design and Media program at edX, I used computer vision to create a machine learning model that could detect whether I was holding a figurine or not.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      mlModel,
      //Project URL - Add Your Project Url Here
      url: "https://drive.google.com/file/d/1otNzUfx2iq3usytapGIpuIKzow3x9Ovi/view",
    },
    {
      title: "Creative Coding", //Project Title - Add Your Project Title Here
      para:
      "As a student in Creative Coding at NYU IDM MicroMaster's Program, I created a stop motion animation", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      stopMotion,
      //Project URL - Add Your Project Url Here
      url: "https://openprocessing.org/sketch/1617268",
    },
    {
      title: "My Remedy", //Project Title - Add Your Project Title Here
      para:
        "An app dedicated to sharing and building your menstrual remedy. My Remedy allows people to login and access the community guide of tips, advice, and shared holistic healthcare practices surrounding menstrual health.", // Add Your Service Type Here
      //Project Image - Add Your Project Imagxe Here
      imageSrc:
        remedy,
      //Project URL - Add Your Project Url Here
      url: "http://my-remedy.herokuapp.com/",
    },
    {
      title: "Trivia Night", //Project Title - Add Your Project Title Here
      para:
        "A trivia app you can play alone or with friends. This was built using React and Node.js.", // Add Your Service Type Here
      //Project Image - Add Your Project Imagxe Here
      imageSrc:
        triviaNight,
      //Project URL - Add Your Project Url Here
      url: "https://trivia-app-two.vercel.app/",
    },
    {
      title: "Creative Coding: Particle System", //Project Title - Add Your Project Title Here
      para:
        "As a student in Creative Coding at NYU IDM MicroMaster's Program, I created a particle system interaction", // Add Your Service Type Here
      //Project Image - Add Your Project Imagxe Here
      imageSrc:
        particleSystem,
      //Project URL - Add Your Project Url Here
      url: "https://openprocessing.org/sketch/1604773",
    }

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "There is an incentive to design cheap, easy, and “good” (good in the sense that fast food is good), for capital means, but do these things offer meaning to life? How do we create technology that is sensitive to people and their emotions? I'm interested in researching and redesigning the ways in which our daily digital interfaces can be more human-friendly.",
  aboutParaTwo:
    "Having pursued Biology at Wesleyan University, my introduction to programming was through bioinformatics. I loved how we utilized technology to interpret DNA more efficiently. Thus, I began my journey on researching and designing human-centered technologies for improved experiences",
  aboutParaThree:
    "I'm currently an iOS Engineer at Comcast NBCUniversal working on the IoT Client Squad in Connected Living. I develop features to connect and interact with various IoT devices, such as sensors, thermostats, door locks and lights, over MQTT protocol.",
  aboutImage:
    kellyPic,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  // skills: [
  //   {
  //     img: htmlIcon,
  //     para:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //   },
  //   {
  //     img: cssIcon,
  //     para:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //   },
  //   {
  //     img: jsIcon,
  //     para:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //   },
  //   {
  //     img: reactIcon,
  //     para:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //   },
  //   {
  //     img: designIcon,
  //     para:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //   },
  //   {
  //     img: codeIcon,
  //     para:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  //   },
  // ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/kellydoleo" },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
