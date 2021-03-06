// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import assert from 'assert';

import * as Emoticons from 'utils/emoticons.jsx';

describe('Emoticons', function() {
    this.timeout(100000);

    it('handleEmoticons', function(done) {
        assert.equal(
            Emoticons.handleEmoticons(':goat: :dash:', new Map()),
            'MM_EMOTICON0 MM_EMOTICON1',
            'should replace emoticons with tokens'
        );

        assert.equal(
            Emoticons.handleEmoticons(':goat::dash:', new Map()),
            'MM_EMOTICON0MM_EMOTICON1',
            'should replace emoticons not separated by whitespace'
        );

        assert.equal(
            Emoticons.handleEmoticons('/:goat:..:dash:)', new Map()),
            '/MM_EMOTICON0..MM_EMOTICON1)',
            'should replace emoticons separated by punctuation'
        );

        assert.equal(
            Emoticons.handleEmoticons('asdf:goat:asdf:dash:asdf', new Map()),
            'asdfMM_EMOTICON0asdfMM_EMOTICON1asdf',
            'should replace emoticons separated by text'
        );

        assert.equal(
            Emoticons.handleEmoticons(':asdf: :goat : : dash:', new Map()),
            ':asdf: :goat : : dash:',
            'shouldn\'t replace invalid emoticons'
        );

        done();
    });
});