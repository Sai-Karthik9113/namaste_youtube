const GOOGLE_API_KEY: string = "AIzaSyAjU8t_7Acrf3ds-mk6yg2W2TzZn9hSmkU";

export const YOUTUBE_VIDEOS_API: string = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
