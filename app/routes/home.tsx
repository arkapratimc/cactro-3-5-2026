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
            "username": "foodie" 
        },
        {
            "id": "4",
            "url": "/4.jpg",
            "username": "foodie" 
        },
        {
            "id": "5",
            "url": "/5.jpg",
            "username": "coder" 
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
