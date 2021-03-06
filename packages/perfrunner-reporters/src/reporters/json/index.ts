import { IReporter } from '../iReporter';
import { writeFile } from '../../utils';

const toJson: IReporter = (outputFolder, result) => {
    return new Promise((resolve, reject) => {
        try {
            writeFile(outputFolder, 'default-reporter.json', result);
            resolve(0);
        } catch (error) {
            reject(error);
        }
    });
};

export { toJson };
