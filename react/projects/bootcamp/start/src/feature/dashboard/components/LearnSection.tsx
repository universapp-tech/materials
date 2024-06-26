import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

export const LearnSection = () => (
  <div>
    <h2 className="text-5xl font-bold text-center max-w-3xl mx-auto">
      Scegli tra una selezione di corsi premium
    </h2>
    <Tabs defaultValue="corsi" className="w-full mt-8">
      <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto">
        <TabsTrigger value="corsi">Corsi</TabsTrigger>
        <TabsTrigger value="bootcamp">Bootcamp</TabsTrigger>
      </TabsList>
      <div className="mt-8">
        <TabsContent value="corsi">
          <CourseTab />
        </TabsContent>
        <TabsContent value="bootcamp">
          <BootcampTab />
        </TabsContent>
      </div>
    </Tabs>
  </div>
)

const CourseTab = () => <SkeletonPosts />
// const [firstPost, ...rest] = data.data
// return (
//   <div className="grid grid-cols-2 grid-rows-1 gap-8">
//     <Post
//       title={firstPost.attributes.Title}
//       img={`${import.meta.env.VITE_STRAPI_URL}${firstPost.attributes.cover.data.attributes.url}`}
//       description={firstPost.attributes.Description}
//       slug={`/app/course/${firstPost.id}`}
//       category={firstPost.attributes.level}
//       size="full"
//     />
//     <div className="grid grid-rows-2 gap-8">
//       {rest.map((post) => (
//         <Post
//           key={post.id}
//           title={post.attributes.Title}
//           img={`${import.meta.env.VITE_STRAPI_URL}${post.attributes.cover.data.attributes.url}`}
//           description={post.attributes.Description}
//           slug={`/app/course/${post.id}`}
//           category={post.attributes.level}
//           variant="horizontal"
//           size="full"
//         />
//       ))}
//     </div>
//   </div>
// )

const BootcampTab = () => <SkeletonPosts />
// const [firstPost, ...rest] = data.data
// return (
//   <div className="grid grid-cols-2 grid-rows-1 gap-8">
//     <Post
//       title={firstPost.attributes.Title}
//       img={`${import.meta.env.VITE_STRAPI_URL}${firstPost.attributes.Cover.data.attributes.url}`}
//       slug={`/app/bootcamp/${firstPost.id}`}
//       category={new Date(firstPost.attributes.Starts).toLocaleDateString()}
//       description={firstPost.attributes.info}
//       size="full"
//     />
//     <div className="grid grid-rows-2 gap-8">
//       {rest.map((post) => (
//         <Post
//           key={post.id}
//           title={post.attributes.Title}
//           description={post.attributes.info}
//           img={`${import.meta.env.VITE_STRAPI_URL}${post.attributes.Cover.data.attributes.url}`}
//           slug={`/app/bootcamp/${post.id}`}
//           category={new Date(post.attributes.Starts).toLocaleDateString()}
//           variant="horizontal"
//           size="full"
//         />
//       ))}
//     </div>
//   </div>
// )

const SkeletonPosts = () => (
  <div className="grid grid-cols-2 grid-rows-1 gap-8">
    <div className="w-full flex flex-col gap-6 p-6  bg-neutral-300 rounded-lg">
      <AspectRatio ratio={16 / 9} className="overflow-hidden">
        <Skeleton className="w-full h-48" />
      </AspectRatio>
      <div className="flex flex-col gap-2">
        <Skeleton className="w-1/2 h-4" />
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-1/2 h-4" />
      </div>
    </div>
    <div className="grid grid-rows-2 gap-8">
      <div className="w-full flex items-center gap-6 p-6  bg-neutral-300 rounded-lg">
        <Skeleton className="w-48 h-48" />
        <div className="min-w-72 flex flex-col gap-2">
          <Skeleton className="w-1/2 h-4" />
          <Skeleton className="w-3/4 h-4" />
          <Skeleton className="w-1/2 h-4" />
        </div>
      </div>
      <div className="w-full flex items-center gap-6 p-6  bg-neutral-300 rounded-lg">
        <Skeleton className="w-48 h-48" />
        <div className="min-w-72 flex flex-col gap-2">
          <Skeleton className="w-1/2 h-4" />
          <Skeleton className="w-3/4 h-4" />
          <Skeleton className="w-1/2 h-4" />
        </div>
      </div>
    </div>
  </div>
)
