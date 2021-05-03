const _ = Cypress._;
const $ = Cypress.$;

import whitespace from './utils/whitespace';
import OptionValidator from './utils/optionValidator';
const validator = new OptionValidator('text');

/**
 * Get the text contents of the subject
 *
 * @example
 * cy.inspect({imageConfig: {threshold: 0.001,}});
 *
 * @param {Object} [options]
 * @param {boolean} [options.log=true]
 *   Log the command to the Cypress command log
 * @param {'simplify'|'keep-newline'|'keep'} [options.imageConfig='simplify']
 *   Replace complex whitespace (`&nbsp;`, `\t`, `\n`, multiple spaces and more
 *   obscure whitespace characters) with a single regular space.
 * 
 * @yields {string|string[]}
 * @since 0.1.0
 */

const screenshotsFolder = Cypress.config('screenshotsFolder');

export function matchImageSnapshotPlugin(options) {
    // 截取图片

    cy.screenshot(name, options);

    // 执行图片对比, 根据screenshotsFolder与name获取到截取的图片

}

Cypress.Commands.add('inspect', { prevSubject: ['optional', 'element', 'window', 'document']}, matchImageSnapshotPlugin);

