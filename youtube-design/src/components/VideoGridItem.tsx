
type VideoGridItemProps = {
    id: string;
    title: string;
    channel: {
        id: string;
        title: string;
        profileUrl: string;
    };
    views: number;
    thumbnailUrl: string;
    postedAt: Date;
    duration: number;
    videoUrl: string;
};

export function VideoGridItem({
    id, title, channel, views, thumbnailUrl, postedAt, duration, videoUrl,
}: VideoGridItemProps) {
    return <div className="flex flex-col gap-2">
        <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img src="{thumbnailUrl}" alt="" className="block w-full h-full object-cover rounded-xl" />
        <div className="grid gap-4 grid-cols-[repeat(auto-fill, minmax(300px, 1fr))]">
            

        

        </div>
        </a>
    </div>
}
