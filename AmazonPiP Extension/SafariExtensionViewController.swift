//
//  SafariExtensionViewController.swift
//  AmazonPiP Extension
//
//  Created by Sammy Yousif on 12/6/18.
//  Copyright © 2018 Sammy Yousif. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
