/*
 * Desc: pwa manual trigger installation
 */
import React, { Component } from 'react';

class PwaInstaller extends Component {
    state = {
        installed: true,
    };
    componentDidMount() {
        window.addEventListener('beforeinstallprompt', this.beforeInstallPrompt);
    }
    componentWillUnmount() {
        window.removeEventListener('beforeinstallprompt', this.beforeInstallPrompt);
    }
    deferredPrompt: any;
    beforeInstallPrompt = (e: Event) => {
        console.log('beforeinstallprompt Event fired');
        // pwa app not installed
        this.setState({ installed: false });

        e.preventDefault();
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e;
        return false;
    };
    download = () => {
        if (this.deferredPrompt !== undefined) {
            // The user has had a postive interaction with our app and Chrome
// has tried to prompt previously, so let's show the prompt.
            this.deferredPrompt.prompt();
            // Follow what the user has done with the prompt.
            this.deferredPrompt.userChoice.then((choiceResult: any) => {
                console.log(choiceResult.outcome);
                if (choiceResult.outcome === 'dismissed') {
                    console.log('User cancelled home screen install');
                } else {
                    console.log('User added to home screen');
                }
                // We no longer need the prompt.  Clear it up.
                this.deferredPrompt = null;
            });
        }
    };
    render() {
        const { installed } = this.state;
        return (
            !installed && (
                <div className="installer" onClick={this.download}>
                    <div className="installer__btn" />
                </div>
            )
        );
    }
}

export default PwaInstaller;
