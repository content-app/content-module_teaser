module.exports = async function ({ client, space, environment }) {

    const moduleItemFields =  "fields": [
    {
      "id": "title",
      "name": "Title",
      "type": "Symbol",
      "localized": false,
      "required": true,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "headline",
      "name": "Headline",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "text",
      "name": "Text",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "externalLink",
      "name": "Link",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    },
    {
      "id": "pageLink",
      "name": "pageLink",
      "type": "Link",
      "localized": false,
      "required": false,
      "validations": [
        {
          "linkContentType": [
            "corePage"
          ]
        }
      ],
      "disabled": false,
      "omitted": false,
      "linkType": "Entry"
    },
    {
      "id": "linkText",
      "name": "linkText",
      "type": "Symbol",
      "localized": false,
      "required": false,
      "validations": [],
      "disabled": false,
      "omitted": false
    }
  ];

    const moduleItem = {
        name: 'Item: Teaser',
        description: '',
        displayField: 'title',
        fields: moduleItemFields,
        sys: {
            id: 'itemTeaser',
        }
    };

    const contentType = await environment.createContentTypeWithId('ItemTeaser', moduleItem);
    await contentType.publish();

    const fields = [
        {
            'id': 'title',
            'name': 'Title',
            'type': 'Symbol',
            'localized': false,
            'required': true,
            'validations': [],
            'disabled': false,
            'omitted': false
        },
        {
            'id': 'teaser',
            'name': 'teaser',
            'type': 'Array',
            'localized': false,
            'required': true,
            'validations': [],
            'disabled': false,
            'omitted': false,
            'items': {
                'type': 'Link',
                'validations': [
                    {
                        'linkContentType': [
                            'ItemTeaser'
                        ]
                    }
                ],
                'linkType': 'Entry'
            }
        }
    ];

    const module = {
        name: 'Module: Teaser',
        description: '',
        displayField: 'title',
        fields: fields,
        sys: {
            id: 'moduleTeaser',
        }
    };

    const mainContentType = await environment.createContentTypeWithId('ModuleTeaser', module);
    await mainContentType.publish();
};
