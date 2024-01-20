
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
        <a href={`/watch?v=${id}`} className="relative aspect-video"></a>
    </div>
}
