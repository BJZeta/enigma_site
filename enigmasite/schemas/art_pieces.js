export default {
  name: "art-piece",
  title: "Art Piece",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "type_of_piece",
      title: "Type of Piece",
      type: "string",
      options: {
        list: [
          { title: "Digital", value: "digital" },
          { title: "Painting", value: "painting" },
        ],
        layout: "radio",
      },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
  ],
};
