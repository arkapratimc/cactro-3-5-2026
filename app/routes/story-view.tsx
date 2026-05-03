import {
    useEffect, useState, useRef 
} from "react";
import {
    useParams, useNavigate, useLoaderData 
} from "react-router";
import styles from "./storyview.module.css";

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

interface Story {
    id: string;
    url: string;
    username: string;
}

export default function StoryView() {
    
    const [
        direction,
        setDirection
    ] = useState<"next" | "prev">( "next" );
    const [
        isSliding,
        setIsSliding
    ] = useState( false );
    const stories = useLoaderData() as Story[];
    const {
        id 
    } = useParams();
    const navigate = useNavigate();
    const imgRef = useRef( null );

    const currentIndex = stories.findIndex( ( s ) => s.id === id );
    const currentStory = stories[currentIndex];

    // console.log( currentStory );

    // inside StoryView, after getting currentStory

    // get only this user's stories
    const userStories = stories.filter( ( s ) => s.username === currentStory.username );
    const userIndex = userStories.findIndex( ( s ) => s.id === id );

    const [
        progress,
        setProgress
    ] = useState( 0 );
    const [
        isAssetLoaded,
        setIsAssetLoaded
    ] = useState( false );

    const goNext = () => {
        if ( userIndex < userStories.length - 1 ) {
            setDirection( "next" );
            setIsSliding( true );

            setTimeout(
                () => {
                    navigate( `/stories/${userStories[userIndex + 1].id}` );
                },
                220 
            );
        } else {
            setDirection( "next" );
            setIsSliding( true );
            const nextStory = stories.find( ( s ) => s.username !== currentStory.username &&
                   stories.indexOf( s ) > currentIndex );
            if ( nextStory ) {
                navigate( `/stories/${nextStory.id}` );
            } else {
                navigate( "/" );
            }
        }
    };
    const goNextRef = useRef(goNext);

    const goPrev = () => {
        if ( userIndex > 0 ) {
            setDirection( "prev" );
            setIsSliding( true );

            setTimeout(
                () => {
                    navigate( `/stories/${userStories[userIndex - 1].id}` );
                },
                220 
            );
        } else {
            setDirection( "prev" );
            setIsSliding( true );
            // find prev user's last story
            const prevUserStories = stories.filter( ( s ) => s.username !== currentStory.username &&
                   stories.indexOf( s ) < currentIndex );
            if ( prevUserStories.length > 0 ) {
                navigate( `/stories/${prevUserStories[prevUserStories.length - 1].id}` );
            }
        }
    };

    // reset when id changes
    useEffect(
        () => {
            setProgress( 0 );
            setIsAssetLoaded( false );
            setIsSliding( false );

            // If image is already cached/loaded, this catches it
            if ( imgRef.current?.complete ) {
                setIsAssetLoaded( true );
            }
        },
        [
            id
        ] 
    );

    // start interval only when asset is loaded
    useEffect(
        () => {
            if ( !isAssetLoaded || isSliding ) return;

            const interval = setInterval(
                () => {
                    setProgress( ( prev ) => {
                        if ( prev >= 100 ) {
                            goNextRef.current();
                            return 100;
                        }
                        return prev + 1;
                    } );
                },
                50
            );

            return () => clearInterval( interval );
        },
        [
            isAssetLoaded
        ] 
    );
    // keep it fresh every render
useEffect(() => {
    goNextRef.current = goNext;
});

    if ( !currentStory ) return null;

    return (
        <div className={styles.container}>
            <div className={styles.progressContainer}>
                {userStories.map( ( _, i ) => (
                    <div key={i} className={styles.barBg}>
                        <div
                            className={styles.barFill}
                            style={{
                                width: i < userIndex ? "100%" : i === userIndex ? `${progress}%` : "0%"
                            }}
                        />
                    </div>
                ) )}
            </div>

            {!isAssetLoaded && (
                <div className={styles.loader}>
                    <p>Loading Story...</p>
                </div>
            )}

            <div
                className={`${styles.storyFrame} ${
                    isSliding
                        ? direction === "next"
                            ? styles.slideOutLeft
                            : styles.slideOutRight
                        : direction === "next"
                            ? styles.slideInRight
                            : styles.slideInLeft
                }`}
            >
                <img
                    ref={imgRef}
                    key={currentStory.url}
                    src={currentStory.url}
                    alt={currentStory.username}
                    onLoad={() => {
        
                        setIsAssetLoaded( true );
                    }}
                    className={styles.image}
                    style={{
                        opacity: isAssetLoaded ? 1 : 0 
                    }}
                />
            </div>
            <div className={styles.leftTap} onClick={goPrev} />
            <div className={styles.rightTap} onClick={goNext} />

            <button onClick={() => navigate( "/" )} className={styles.closeBtn}>
                ✕
            </button>

            <div className={styles.userInfo}>
                <strong>{currentStory.username}</strong>
            </div>
        </div>
    );
}
