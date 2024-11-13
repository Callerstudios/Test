from pytube import Playlist, YouTube

def download_multiple():

    playlist_url = 'https://youtube.com/playlist?list=PLr6-GrHUlVf96NLj3PQq-tmEB6woZjwEl&si=esL1YRPHYUgEzLye'

    playlist = Playlist(playlist_url)

    print(f'Downloading playlist: {playlist.title}')

    for video in playlist.videos:
        print(f'Downloading video: {video.title}')
        video.streams.get_highest_resolution().download()

    print('Playlist downloaded successfully.')

def download_single(url):

    url = 'https://www.youtube.com/watch?v=9bZkp7q19f0'

    yt = YouTube(url)

    streams = yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc()

    for stream in streams:
        print(stream)

    stream = streams.get_by_resolution('720p')

    stream.download()

    print(f'Downloaded: {yt.title}')
