module.exports = async function ({ client, space, environment }) {

    const moduleItemFields = [
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
            'id': 'text',
            'name': 'Text',
            'type': 'Symbol',
            'localized': false,
            'required': false,
            'validations': [],
            'disabled': false,
            'omitted': false
        },
        {
            'id': 'link',
            'name': 'Link',
            'type': 'Symbol',
            'localized': false,
            'required': false,
            'validations': [],
            'disabled': false,
            'omitted': false
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
                            'itemTeaser'
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