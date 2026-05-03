import type {
    Route 
} from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import {
    Link, useLoaderData 
} from "react-router";

// Import your new CSS module here
import styles from "./home-styles.module.css";

export function meta( {
}: Route.MetaArgs ) {
    return [
        {
            title: "Instagram stories" 
        },
        {
            name: "description",
            content: "Its a cactro test btw" 
        }
    ];
}

export function loader() {
    // in both loaders
    const res = [
        {
            "id": "1",
            "url": "/1.jpg",
            "username": "traveler" 
        },
        {
            "id": "2",
            "url": "/2.jpg",
            "username": "traveler" 
        },
        {
            "id": "3",
            "url": "/3.jpg",
            "username": "traveler" 
        },
        {
            "id": "4",
            "url": "/4.jpg",
            "username": "foodie" 
        },
        {
            "id": "5",
            "url": "/5.jpg",
            "username": "foodie" 
        },
        {
            "id": "6",
            "url": "/6.jpg",
            "username": "foodie" 
        },
        {
            "id": "7",
            "url": "/7.jpg",
            "username": "coder" 
        },
        {
            "id": "8",
            "url": "/8.jpg",
            "username": "coder" 
        },
        {
            "id": "9",
            "url": "/1.jpg",
            "username": "sunset_chaser" 
        },
        {
            "id": "10",
            "url": "/2.jpg",
            "username": "sunset_chaser" 
        },
        {
            "id": "11",
            "url": "/3.jpg",
            "username": "mountain_mike" 
        },
        {
            "id": "12",
            "url": "/4.jpg",
            "username": "mountain_mike" 
        },
        {
            "id": "13",
            "url": "/5.jpg",
            "username": "mountain_mike" 
        },
        {
            "id": "14",
            "url": "/6.jpg",
            "username": "cafe_nina" 
        },
        {
            "id": "15",
            "url": "/7.jpg",
            "username": "cafe_nina" 
        },
        {
            "id": "16",
            "url": "/8.jpg",
            "username": "dev_sarah" 
        },
        {
            "id": "17",
            "url": "/1.jpg",
            "username": "dev_sarah" 
        },
        {
            "id": "18",
            "url": "/2.jpg",
            "username": "dev_sarah" 
        },
        {
            "id": "19",
            "url": "/3.jpg",
            "username": "ocean_vibes" 
        },
        {
            "id": "20",
            "url": "/4.jpg",
            "username": "ocean_vibes" 
        },
        {
            "id": "21",
            "url": "/5.jpg",
            "username": "pixel_art" 
        },
        {
            "id": "22",
            "url": "/6.jpg",
            "username": "pixel_art" 
        },
        {
            "id": "23",
            "url": "/7.jpg",
            "username": "gym_bro" 
        },
        {
            "id": "24",
            "url": "/8.jpg",
            "username": "gym_bro" 
        },
        {
            "id": "25",
            "url": "/1.jpg",
            "username": "gym_bro" 
        },
        {
            "id": "26",
            "url": "/2.jpg",
            "username": "bookworm" 
        },
        {
            "id": "27",
            "url": "/3.jpg",
            "username": "bookworm" 
        },
        {
            "id": "28",
            "url": "/4.jpg",
            "username": "skater_kid" 
        },
        {
            "id": "29",
            "url": "/5.jpg",
            "username": "skater_kid" 
        },
        {
            "id": "30",
            "url": "/6.jpg",
            "username": "skater_kid" 
        },
        {
            "id": "31",
            "url": "/7.jpg",
            "username": "plantmom" 
        },
        {
            "id": "32",
            "url": "/8.jpg",
            "username": "plantmom" 
        },
        {
            "id": "33",
            "url": "/1.jpg",
            "username": "dj_flex" 
        },
        {
            "id": "34",
            "url": "/2.jpg",
            "username": "dj_flex" 
        },
        {
            "id": "35",
            "url": "/3.jpg",
            "username": "dj_flex" 
        },
        {
            "id": "36",
            "url": "/4.jpg",
            "username": "astro_nerd" 
        },
        {
            "id": "37",
            "url": "/5.jpg",
            "username": "astro_nerd" 
        },
        {
            "id": "38",
            "url": "/6.jpg",
            "username": "wanderlust" 
        },
        {
            "id": "39",
            "url": "/7.jpg",
            "username": "wanderlust" 
        },
        {
            "id": "40",
            "url": "/8.jpg",
            "username": "wanderlust" 
        }
    ];
    return res;
}

export default function Home() {
    const stories = useLoaderData();

    // group by username, keep first story per user
    const users = stories.reduce(
        ( acc: any[], story: any ) => {
            if ( !acc.find( ( u: any ) => u.username === story.username ) ) {
                acc.push( story );
            }
            return acc;
        },
        [
        ] 
    );

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Stories</h2>
            <div className={styles.storyList}>
                {users.map( ( story: any ) => (
                    <Link key={story.id} to={`/stories/${story.id}`} className={styles.storyLink}>
                        <div className={styles.storyRing}>
                            <img 
                                src={story.url} 
                                alt={story.username} 
                                className={styles.storyImage} 
                            />
                        </div>
                        <p className={styles.username}>{story.username}</p>
                    </Link>
                ) )}
            </div>
        </div>
    );
}
