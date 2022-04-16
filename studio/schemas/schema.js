import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import til from './til'
import tools from './bookmarks/tools'
import design from './bookmarks/design'
import learning from './bookmarks/learning'
import library from './bookmarks/library'
import gallery from './gallery'

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([til, tools, design, learning, library, gallery]),
})
