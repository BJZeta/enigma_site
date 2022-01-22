export default {
  name: "art",
  title: "Art Piece",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "type",
      title: "Type",
      type: "array",
      of: [{ type: "reference", to: { type: "types" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "for_sale",
      title: "For Sale",
      type: "boolean",
    },
    {
      name: "sale_link",
      title: "Sale Link",
      type: "string",
    },
  ],

  /////UNEEDED PREVIEW FOR THE TIME BEING////
  // preview: {
  //   select: {
  //     title: "title",
  //     media: "mainImage",
  //   },
  //   prepare(selection) {
  //     const { author } = selection;
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     });
  //   },
  // },
  /////UNEEDED PREVIEW FOR THE TIME BEING////
};
