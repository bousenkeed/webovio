import image1 from '../images/client_1.png'
import image2 from '../images/client_2.png'
import image3 from '../images/client_3.png'
import image4 from '../images/client_4.png'
import image5 from '../images/client_5.png'
import projectImg1 from '../images/feature-1.jpg';
import projectAvatar1 from '../images/feature-avatar.png';
import projectImg2 from '../images/feature-2.jpg';
import projectAvatar2 from '../images/feature-avatar2.png';
import projectImg3 from '../images/feature-3.jpg';
import projectAvatar3 from '../images/feature-avatar3.png';

export const clientsImagesArr = [
    { id: 1, src: image1, name: 'Andrew Porter' },
    { id: 2, src: image2, name: 'LeaderShip' },
    { id: 3, src: image3, name: 'Walbridge' },
    { id: 4, src: image4, name: 'Ideal Contracting' },
    { id: 5, src: image5, name: 'Phalen Leadership Academy' }
]

export const projects = [
    {
        mainImage: projectImg1,
        avatar: projectAvatar1,
        text: `“In my history of working with trade show vendors, 
        I can honestly say that there is not one company that 
        I've ever worked with that has better service than Exhibit Systems.”`,
        name: 'Angel Armstrong',
        profession: 'Founder & CEO, Google',
        title: 'The wall new Balenciaga.com',
        paragraph1: `This article is floated online with an aim to help you find 
        the best dvd printing solution.`,
        paragraph2: `Dvd printing is an important feature used by large and small 
        DVD production houses to print information on DVDs.`,
        reverse: false
    },
    {
        mainImage: projectImg2,
        avatar: projectAvatar2,
        text: `“I know they are going to be honest with me. 
        I am not going to get a subpar product; I know it is going to be good. 
        That is the number one advantage of working with Exhibit Systems.”`,
        name: 'Lina Hart',
        profession: 'Founder & CEO, Jico',
        title: 'Is this the future of 3D model?',
        paragraph1: `While it was just a TV show, that little speech at the beginning of the 
        original Star Trek show really did do a good job of capturing our feelings about space.`,
        paragraph2: `It is those feelings that drive our love of astronomy and our 
        desire to learn more and more about it.`,
        reverse: true
    },
    {
        mainImage: projectImg3,
        avatar: projectAvatar3,
        text: `“Exhibit Systems is not a provider. They are not a supplier. 
        They are a partner with expertise in making trade shows effective.”`,
        name: 'Eunice Oliver',
        profession: 'Founder & CEO, Zeem',
        title: ' Is this the future of Online Booking',
        paragraph1: `You should be able to find several indispensable facts about 
        motivation in the following paragraphs.`,
        paragraph2: `If there’s at least one fact you didn’t know before, imagine the 
        difference it might make.`,
        reverse: false
    }
]