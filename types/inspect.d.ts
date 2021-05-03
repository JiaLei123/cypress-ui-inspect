declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * 截取图片并进行图片对比, 参数中可以执行对比的执行的方法与参数
         *
         * @see 
         */
         inspect(options?: {
            log?: boolean;
            imageConfig?: {
                comapre_method: "",
                threshold: ""
            };
        }): Chainable<Subject>
    }
}
