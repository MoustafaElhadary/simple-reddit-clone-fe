import {
  ArrowRightIcon,
  ChatAltIcon,
  QuestionMarkCircleIcon,
  ThumbDownIcon,
  ThumbUpIcon,
} from '@heroicons/react/solid'
import Navbar from 'components/Navbar'
import Link from 'next/link'

const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
]

export default function Example() {
  return (
    <>
      <div className="h-full bg-gray-100">
        <div className="min-h-full">
          <Navbar />

          <main className="py-10">
            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2 lg:col-start-1">
                {/* Description list*/}
                <section aria-labelledby="applicant-information-title">
                  <div className="bg-white shadow sm:rounded-lg">
                    <div className="flex flex-row px-4 py-5 sm:px-6">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <h2
                          id="applicant-information-title"
                          className="text-lg font-medium leading-6 text-gray-900"
                        >
                          What would you have done differently if you ran
                          Jurassic Park?
                        </h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          Dries Vincent - December 9 at 11:43 AM
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 pt-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <dd className="mt-1 text-sm text-gray-900">
                            Jurassic Park was an incredible idea and a
                            magnificent feat of engineering, but poor protocols
                            and a disregard for human safety killed what could
                            have otherwise been one of the best businesses of
                            our generation. Ultimately, I think that if you
                            wanted to run the park successfully and keep
                            visitors safe, the most important thing to
                            prioritize would be
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div className="mt-6 flex justify-between space-x-8 px-4 py-5 sm:px-6">
                      <div className="flex space-x-6">
                        <span className="inline-flex items-center text-sm">
                          <button
                            type="button"
                            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                          >
                            <ThumbUpIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                            <span className="font-medium text-gray-900">
                              11
                            </span>
                            <span className="sr-only">likes</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button
                            type="button"
                            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                          >
                            <ThumbDownIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                            <span className="font-medium text-gray-900">
                              11
                            </span>
                            <span className="sr-only">likes</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center text-sm">
                          <button
                            type="button"
                            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                          >
                            <ChatAltIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                            <span className="font-medium text-gray-900">
                              13
                            </span>
                            <span className="sr-only">replies</span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Comments*/}
                <section aria-labelledby="notes-title">
                  <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
                    <div className="divide-y divide-gray-200">
                      <div className="px-4 py-5 sm:px-6">
                        <h2
                          id="notes-title"
                          className="text-lg font-medium text-gray-900"
                        >
                          Comments
                        </h2>
                      </div>
                      <div className="px-4 py-6 sm:px-6">
                        <ul role="list" className="space-y-8">
                          {comments.map((comment) => (
                            <li key={comment.id}>
                              <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <div className="text-sm">
                                    <a
                                      href="#"
                                      className="font-medium text-gray-900"
                                    >
                                      {comment.name}
                                    </a>
                                  </div>
                                  <div className="mt-1 text-sm text-gray-700">
                                    <p>{comment.body}</p>
                                  </div>
                                  <div className="mt-2 space-x-2 text-sm">
                                    <span className="font-medium text-gray-500">
                                      {comment.date}
                                    </span>{' '}
                                    <span className="font-medium text-gray-500">
                                      &middot;
                                    </span>{' '}
                                    <button
                                      type="button"
                                      className="font-medium text-gray-900"
                                    >
                                      Reply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-6 sm:px-6">
                      <div className="flex space-x-3">
                        <div className="min-w-0 flex-1">
                          <form action="#">
                            <div>
                              <label htmlFor="comment" className="sr-only">
                                About
                              </label>
                              <textarea
                                id="comment"
                                name="comment"
                                rows={3}
                                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Add a note"
                                defaultValue={''}
                              />
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                              <a
                                href="#"
                                className="group inline-flex items-start space-x-2 text-sm text-gray-500 hover:text-gray-900"
                              >
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span>Some HTML is okay.</span>
                              </a>
                              <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                              >
                                Comment
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
